import React from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import AppMenu from './common/AppMenu'
import RegisterForm from './components/RegisterForm'
import QuiltedImageList from './components/QuiltedImageList'
import BasicTable from './components/BasicTable'
import OtherPage from './Pages/otherPage'
import Article from './Pages/Arti.tsx'
import LoginPage from './components/LoginPage'
import TestData from './components/TestData'

const PageRegister = () => <Typography variant="h3" component={RegisterForm}>Register Form</Typography>
const PageMusic = () => <Typography variant="h3" component={QuiltedImageList}>Music</Typography>
const PageCustomers = () => <Typography variant="h3" component={BasicTable}>Customers Page</Typography>
const PageProduct = () => <Typography variant="h3" component={OtherPage}>Product Page</Typography>
const ArticlePage = () => <Typography variant="h3" component={Article}>Article Page</Typography>
const LoginPages = () => <Typography variant="h3" component={LoginPage}>Login Page</Typography>
const Test = () => <Typography variant="h3" component={TestData}>Test Data</Typography>

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" exact component={PageRegister} />
              <Route path="/music" component={PageMusic} />
              <Route path="/customers" component={PageCustomers} />
              <Route path="/products" component={PageProduct} />
              <Route path="/article" component={ArticlePage} />
              <Route path="/login" component={LoginPages} />
              <Route path="/testData" component={Test} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default App