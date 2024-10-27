import { Paper, Table, TableContainer, TableRow } from "@mui/material";
import styled from "styled-components";
import Icon from "../../../images/NotInformation";

export const Container = styled.div`
    width: 100%;
`;

export const StyledIcon = styled(Icon)`
    width: 50%;
    height: 50%;
    
    padding-top: 2rem;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;

        padding-top: 0;
    }

    @media (max-width: 425px){
        width: 40%;
        height: 40%;

    }

`

export const ContainerTitle = styled.div`
    display: flex;
    padding-bottom: 1rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #333;
`;

export const DivContainerTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1.5rem;

    @media (max-width: 768px) {
        padding-top: 4rem;
    }
`;

export const StyledTableContainer = styled(TableContainer)<{component?: typeof Paper}>`
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    max-height: calc(100vh - 200px);
    width: 100%;
`;

export const StyledTable = styled(Table)`
    min-width: 650px; 
`;

export const StyledRowTableHead = styled(TableRow)`
    font-weight: bold;
`;

export const StyledRowTableBody = styled(TableRow)`
    &:last-child td, &:last-child th {
        border: 0;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: right;
    align-items: end;
    padding-top: 1.5rem;
    padding-right: 1.5rem;
`;

