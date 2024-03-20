import { Box, Pagination, Paper } from '@mui/material';
import React from 'react'
import { Table, TableCell, TableHeader, TableRow } from './styles';

function TableExample() {

    const handleChangePagination = (event, value) => {
        // Handle page change here
        console.log(`Page changed to ${value}`);
    };

    return (
        <Paper>
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader align='left'>Name</TableHeader>
                        <TableHeader align='left'>Age</TableHeader>
                        <TableHeader align='left'>Age</TableHeader>
                        <TableHeader align='left'>Age</TableHeader>
                        <TableHeader align='left'>Age</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    <TableRow>
                        <TableCell>John</TableCell>
                        <TableCell>25</TableCell>
                        <TableCell>25</TableCell>
                        <TableCell>25</TableCell>
                        <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emily</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emily</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emily</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emily</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emily</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emily</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            colSpan={5}
                        >
                            <Box
                                sx={{ 
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Pagination
                                    count={10}
                                    page={2}
                                    color="primary"
                                    onChange={handleChangePagination}
                                />
                            </Box>
                        </TableCell>
                    </TableRow>
                </tbody>
            </Table>
        </Paper>
    )
}

export default TableExample