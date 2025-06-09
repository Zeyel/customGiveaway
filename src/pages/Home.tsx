import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render } from 'preact';
import { Data } from '../Model/Data';
import { loadData } from '../Service/DataLoad';
import TableView from './molecules/TableView';
import HeaderView from './HeaderView';
import FooterView from './FooterView';

let data : Data[] = await loadData();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <HeaderView />
                <TableView />
                <FooterView />
            </div>
        </ThemeProvider>
    );
}

render(<App />, document.getElementById('app'));