var DocumentManager = React.createClass({
    getInitialState: function() {
        return {showError: false};
    },
    render: function() {
        change = undefined;
        return(
          <div>
            <fieldset>
                <legend>Contract & Documents REACT</legend>
                <div className="row">
                  <div className="col-lg-9">
                  {change != undefined ?
                    <ul className="list-group">
                      <li className="list-group-item"><i className="fa fa-file"></i> DOWNLOAD &nbsp;DELETE</li>
                    </ul>
                    : null
                  }
                  </div>
                  <div className="col-lg-2">
                    <button type="button" className="btn btn-default btn-sm" ><i className="fa fa-upload"></i> Add Document</button>
                  </div>


                <DropzoneDemo />
                  
                </div>
            </fieldset>
          </div>
        );
    }
});

var DropzoneDemo = React.createClass({
    onDrop: function (files) {
      console.log('Received files: ', files);
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
    }
});

ReactDOM.render(
    <DocumentManager />,
    document.getElementById('react-document')
);