import React from "react";


export default function Welcome(props) {
  const createNewForm = () => {
    props.history.pushState(null, "/builder");
  };

  return (
    <div>
      <div className="jumbotron">
        <div className="container">
        <h1>Hey, welcome!</h1>
        <p>
            This is the <strong>Kinto formbuilder</strong>, a tool to help
            you create online forms easily.
        </p>
        <p><button type="button" onClick={createNewForm} className="btn btn-primary btn-lg"><i className="glyphicon glyphicon-edit"></i>Create a new form!</button></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <h2><i className="glyphicon glyphicon-eye-close"></i> Your privacy matters</h2>
          <p>With <a href="https://kinto-storage.org">Kinto</a>, you are not giving Google or any other giants your data.</p>
          <p>Our goal is not to host all the forms of the world, so we try to make it easy for you to <a href="http://kinto.readthedocs.org/en/latest/get-started.html#get-started">host your own servers</a>.</p>
        </div>
        <div className="col-md-4">
          <h2><i className="glyphicon glyphicon-heart-empty"></i> Community focused</h2>
          <p>All the code we write is <a href="https://github.com/kinto/formbuilder">written in the open</a> and we try to be
          the most inclusive as we can to welcome your ideas.</p>
          <p>Kinto and the formbuilder are released under Apache 2.0 licenses</p>
        </div>
        <div className="col-md-4">
          <h2><i className="glyphicon glyphicon-saved"></i> Account-less</h2>
          <p>You don't need an account to create a new form: just create and give it to your friends, it's a matter of minutes!</p>
        </div>
        </div>
      </div>
    </div>
  );
}
