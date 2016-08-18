var DocumentManager = React.createClass({
    getInitialState: function() {
        return {showError: false};
    },
    render: function() {
        return (
            <div>
            <fieldset>
                <legend>Contract & Documents REACT</legend>
                <div className="row">
                  <div className="col-lg-9">
                    <ul className="list-group">
                      <li className="list-group-item"><i className="fa fa-file"></i> DOWNLOAD &nbsp;DELETE</li>
                    </ul>
                  </div>
                  <div className="col-lg-2">UPLOAD_DOC</div>
                </div>
            </fieldset>
          </div>
        );
    }
});

ReactDOM.render(
    <DocumentManager />,
    document.getElementById('react-document')
);