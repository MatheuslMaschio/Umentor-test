import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, UserFormData } from "..";
import { Box, Button, Modal, TextField, CircularProgress } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "94%",
    maxWidth: 600,
    bgcolor: 'background.paper',
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
    outline: 'none',
};

// Esquema de validação usando Zod, ajustado para o campo 'situation' como string
const userSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    situation: z.string().nonempty("Situação é obrigatória"),
    admission_date: z.string().nonempty("Data de admissão é obrigatória"),
    id: z.number().optional(),
});

export default function BasicModal({
    open,
    handleClose,
    handleSubmit,
    user,
    resetForm
}: {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (data: UserFormData) => void;
    user: User | null;
    resetForm: () => void	
}) {

    const { register, handleSubmit: handleFormSubmit, reset, formState: { errors } } = useForm<User>({
        defaultValues: { 
            ...(user ? { ...user, admission_date: dayjs(user.admission_date).format('YYYY-MM-DD') } : {}) 
        },
        resolver: zodResolver(userSchema),  
    });

    const [isSubmitting, setIsSubmitting] = useState(false); 

    const onSubmit: SubmitHandler<User> = async (data) => {
        setIsSubmitting(true); 
        await handleSubmit({ 
            ...data,
            admission_date: dayjs(data.admission_date).format('YYYY-MM-DD'), // Formatar a data antes de enviar
            id: user?.id,
        }); 
        reset();
        setIsSubmitting(false); 
    };

    const handleCloseWithReset = () => {
        reset();
        resetForm();
        handleClose();
    }

    return (
        <Modal 
            open={open}
            onClose={handleCloseWithReset}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h2 id="modal-modal-title" style= {{ textAlign: "center", paddingBottom: "1rem" }}>
                    {user ? "Editando Usuário" : "Adicionando Usuário"}
                </h2>

                <form 
                    style={{ display: "flex", flexDirection: "column", gap: 20 }} 
                    onSubmit={handleFormSubmit(onSubmit)}
                >
                    <TextField
                        fullWidth
                        label="Nome"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />

                    <TextField
                        fullWidth
                        label="Email"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                    {/* Campo de situação como string */}
                    <TextField
                        fullWidth
                        label="Situação"
                        {...register("situation")}
                        error={!!errors.situation}
                        helperText={errors.situation?.message}
                    />

                    {/* Campo de data de admissão */}
                    <TextField
                        fullWidth
                        type="date"
                        label="Data de Admissão"
                        {...register("admission_date")}
                        InputLabelProps={{ shrink: true }}
                        error={!!errors.admission_date}
                        helperText={errors.admission_date?.message}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting} 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Salvar"}
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}
