import React from 'react'


export default class AddingProject extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
    render() {
      return (
        <div>
          {/* <Button colored onClick={this.handleOpenDialog} raised ripple>
            Show Dialog
          </Button>
          <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
            <DialogTitle>Allow data collection?</DialogTitle>
            <DialogContent>
              <p>
                Allowing us to collect data will let us get you the information
                you want faster.
              </p>
            </DialogContent>
            <DialogActions>
              <Button type="button">Agree</Button>
              <Button type="button" onClick={this.handleCloseDialog}>
                Disagree
              </Button>
            </DialogActions>
          </Dialog> */}
        </div>
      );
    }
  }