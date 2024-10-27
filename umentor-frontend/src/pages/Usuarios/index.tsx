import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import Swal from "sweetalert2";
import { Container, ContainerButton, DivContainerTable, StyledIcon, StyledRowTableBody, StyledRowTableHead, StyledTable, StyledTableContainer } from "./styles";
import BasicModal from "./components/modal";
import { Alert, Button, Fab, Paper, Snackbar, TableBody, TableCell, TableHead, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

export interface User {
    id: number;
    name: string;
    email: string;
    situation: string;
    admission_date: string;
    created_at: string;
    updated_at: string;
}

export interface UserFormData extends Omit<User, 'id'> {
    id?: number;
}

export function Usuarios() {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [alertMessage, setAlertMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [openModal, setOpenModal] = useState(false);

    const { reset } = useForm<UserFormData>();

    // Buscar todos os usuários
    useEffect(() => {
        async function getAllUsers() {
            try {
                const response = await api.get(`/api/users`);
                setUsers(response.data.users);
                setFilteredUsers(response.data.users); 
            } catch {
                setAlertType('error');
                setAlertMessage('Erro ao buscar usuários!');
                setAlertOpen(true);
            } finally {
                setLoading(false);
            }
        }
        getAllUsers();
    }, []);

    // Filtro de pesquisa
    useEffect(() => {
        const results = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.situation.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results);
    }, [searchTerm, users]);

    // Método para excluir usuário
    const removeUser = async (id: number) => {
        try {
            await api.delete(`/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
            setAlertType('success');
            setAlertMessage('Usuário excluído com sucesso!');
            setAlertOpen(true);
        } catch {
            setAlertType('error');
            setAlertMessage('Erro ao excluir usuário!');
            setAlertOpen(true);
        } finally {
            setTimeout(() => {
                setAlertOpen(false);
            }, 3000);
        }
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                removeUser(id);
            }
        });
    };

    // Método para editar usuário
    function handleEditUser(user: User) {
        setSelectedUser(user);
        setOpenModal(true);
    }

    function handleCloseModal() {
        reset(); // Resetar os campos do formulário ao fechar o modal
        setSelectedUser(null);
        setOpenModal(false);
    }

    async function updateUser(updatedUser: UserFormData) {
        try {
            const response = await api.put(`/api/users/${updatedUser.id}`, updatedUser);
            const updatedData = response.data.user;

            setUsers(users.map(u => (u.id === updatedUser.id ? updatedData : u)));
            setAlertType('success');
            setAlertMessage('Usuário atualizado com sucesso!');
            setAlertOpen(true);
        } catch {
            setAlertType('error');
            setAlertMessage('Erro ao atualizar usuário!');
            setAlertOpen(true);
        } finally {
            setOpenModal(false);
        }
    }

    // Método para criar usuário
    async function createUser(newUser: UserFormData) {
        try {
            const formattedUser = {
                ...newUser,
                admission_date: dayjs(newUser.admission_date).format('YYYY-MM-DD')
            };

            const response = await api.post('/api/users', formattedUser);
            const createdUser = response.data.user;

            setUsers([createdUser, ...users]);
            setFilteredUsers([createdUser, ...users]); // Atualiza também a lista filtrada
            setAlertType('success');
            setAlertMessage('Usuário criado com sucesso!');
            setAlertOpen(true);
        } catch {
            setAlertType('error');
            setAlertMessage('Erro ao criar usuário!');
            setAlertOpen(true);
        } finally {
            setOpenModal(false);
        }
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (users.length === 0) {
        return (
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <BasicModal
                    open={openModal}
                    handleClose={handleCloseModal}
                    handleSubmit={selectedUser ? updateUser : createUser}
                    user={selectedUser}
                    key={selectedUser?.id}
                    resetForm={reset}
                />

                <h1> Nenhum Usuario encontrado! </h1>
                <StyledIcon />

                <ContainerButton>
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={() => {
                            setSelectedUser(null);
                            setOpenModal(true);
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </ContainerButton>
            </Container>

        )
    }

    return (
        <Container>
            <BasicModal
                open={openModal}
                handleClose={handleCloseModal}
                handleSubmit={selectedUser ? updateUser : createUser}
                user={selectedUser}
                key={selectedUser?.id}
                resetForm={reset}
            />

            <Snackbar open={alertOpen} autoHideDuration={3000} onClose={() => setAlertOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setAlertOpen(false)} severity={alertType} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>



            <DivContainerTable>

                <TextField
                    fullWidth
                    label="Buscar por Nome, Email ou Situação"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{  marginBottom: 2,
                        backgroundColor: 'white',        
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ccc', 
                            },
                            '&:hover fieldset': {
                                borderColor: '#1976d2', 
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#1976d2', 
                            },
                        },
                    }}
                />


                <StyledTableContainer component={Paper}>
                    <StyledTable stickyHeader aria-label="scrollable table">
                        <TableHead>
                            <StyledRowTableHead>
                                <TableCell align="left">Nome</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Situação</TableCell>
                                <TableCell align="center">Data de Admissão</TableCell>
                                <TableCell align="center">Criado em</TableCell>
                                <TableCell align="center">Atualizado em</TableCell>
                                <TableCell align="center">Editar</TableCell>
                                <TableCell align="center">Excluir</TableCell>
                            </StyledRowTableHead>
                        </TableHead>
                        <TableBody>
                            {filteredUsers.map((user) => (
                                <StyledRowTableBody key={user.id}>
                                    <TableCell align="left">{user.name}</TableCell>
                                    <TableCell align="center">{user.email}</TableCell>
                                    <TableCell align="center">{user.situation}</TableCell>
                                    <TableCell align="center">{dayjs(user.admission_date).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell align="center">{dayjs(user.created_at).format('DD/MM/YYYY HH:mm')}</TableCell>
                                    <TableCell align="center">{dayjs(user.updated_at).format('DD/MM/YYYY HH:mm')}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            onClick={() => handleEditUser(user)}
                                            sx={{
                                                backgroundColor: '#FFC107',
                                                color: 'black',
                                                borderRadius: 2,
                                                boxShadow: 3,
                                                padding: '8px 16px',
                                                textTransform: 'none',
                                                '&:hover': {
                                                    backgroundColor: '#FFA000',
                                                    boxShadow: 6,
                                                },
                                            }}
                                        >
                                            Editar
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(user.id)}
                                            sx={{
                                                borderRadius: 2,
                                                boxShadow: 3,
                                                '&:hover': {
                                                    backgroundColor: '#d32f2f',
                                                    boxShadow: 6,
                                                },
                                                textTransform: 'none',
                                                padding: '8px 16px',
                                            }}
                                        >
                                            Excluir
                                        </Button>
                                    </TableCell>
                                </StyledRowTableBody>
                            ))}
                        </TableBody>
                    </StyledTable>
                </StyledTableContainer>
            </DivContainerTable>

            <ContainerButton>
                <Fab color="primary" aria-label="add" onClick={() => setOpenModal(true)}>
                    <AddIcon />
                </Fab>
            </ContainerButton>
        </Container>
    );
}
