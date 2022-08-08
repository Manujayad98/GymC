import React, { useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.black,
        fontSize: '15px',
        fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#D9D9D9',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function EnhancedTableHead(props) {
    const {
        rowCount,
        headCells,
    } = props;

    return (
        <TableHead>
            <TableRow >
                {headCells.map((headCell) => (
                    <StyledTableCell>
                        {headCell.label}
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    rowCount: PropTypes.number.isRequired,
};


export default function CustomizedTables(props) {

    const [rows, setRows] = useState(props.rows);
    const [headCells, setHeadCells] = useState(props.headCells);
    const [tableName, settableName] = useState(props.tableName);

    return (
        <Box sx={{ padding: '20px' }}>
            <TableContainer component={Paper} style={{
                alignItems: 'center', width: '80%',
            }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <EnhancedTableHead
                        rowCount={rows.length}
                        tableName={tableName}
                        headCells={headCells}
                    />
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {Object.values(row)[0]}
                                </StyledTableCell>
                                <StyledTableCell >{Object.values(row)[1]}</StyledTableCell>
                                <StyledTableCell >{Object.values(row)[2]}</StyledTableCell>
                                <StyledTableCell >{Object.values(row)[3]}</StyledTableCell>
                                <StyledTableCell >{Object.values(row)[4]}</StyledTableCell>
                                <StyledTableCell align="center">{Object.values(row)[5]}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box>
    );
}
