import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {items} = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabContent() {
    return items[value].page();
  }

  console.log("Valor: ", value);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" scrollButtons="on">
          {items.map((item, index)=>
            (
              <Tab 
              label={item.label} 
              icon={item.icon}
              {...a11yProps(index)}
              centered
               />
            )
          )}
        </Tabs>
      </AppBar>
      <TabContent />
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
}));
