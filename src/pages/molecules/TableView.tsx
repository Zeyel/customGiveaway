import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { loadData } from '../../Service/DataLoad';

const columns: GridColDef[] = [
  { field: 'username', headerName: 'Username', width: 250 },
  { field: 'value', headerName: 'Nombre de récupérations', width: 250 },
];

const rows = await loadData();

const paginationModel = { page: 0, pageSize: 15 };

export default function DataTable() {
  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[25, 10]}
      />
    </Paper>
  );
}