import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getUrl from '../tools/getUrl';

const StyledTableCell = withStyles(theme => ({
  root: {
    padding: '16px',
    width: '33%',
  },
  head: {
    backgroundColor: theme.palette.primary.secondary,
    color: 'white',
    fontSize: '1rem',
    fontWeight: 500,
  },
  body: {
    fontSize: 14,
    padding: '16px',
  },
  alignRight: {
    textAlign: 'center',
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: '100%'
  },
}));

function createData(name, applied, interviews) {
	return { name, applied, interviews };
}

export default function SummaryTable(props) {
  const classes = useStyles();
  const { appliedStats } = props;
  let rows;

  if (appliedStats != null) {
      rows = [
        createData('This Week', appliedStats.this_week, 0),
        createData('Weekly Average', appliedStats.avg_applications, 0),
      ]
  } else {
    rows = [
      createData('This Week', 0, 0),
      createData('Weekly Average', 0, 0),
    ]
  }

  return (
    <Paper> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Applied</StyledTableCell>
            <StyledTableCell align="right">Upcoming Interviews</StyledTableCell>
					</TableRow>
				</TableHead>
			<TableBody>
				{rows.map(row => (
					<TableRow key={row.name}>
						<StyledTableCell component="th" scope="row">
							{row.name}
						</StyledTableCell>
						<StyledTableCell align="right">{row.applied}</StyledTableCell>
						<StyledTableCell align="right">{row.interviews}</StyledTableCell>
					</TableRow>
				))}
			</TableBody>
			</Table>
		</Paper>
  );
}
