'use strict';

module.exports = function(app) {
  const express = require('express');
  let clinicalServicesRouter = express.Router();

  clinicalServicesRouter.get('/visits', function(req, res) {
    setTimeout(() => {
      res.send({
        'results': [
          {
            "visitDate":"11/22/2018",
            "resonForVisit":"itchy ankle",
            "facility":"7 eleven"
          },
          {
            "visitDate":"10/14/2018",
            "resonForVisit":"black eye",
            "facility":"Olive Garden"
          }
        ]
      });
    }, 2000);
  });

  clinicalServicesRouter.get('/appointments', function(req, res) {
    setTimeout(() => {
      res.send({
        'results': [
          {
            "appointmentDate":"10/22/2019",
            "reasonForAppointment":"Ashy knee",
            "facility":"Care now 1"
          }
        ]
      });
    }, 5000);
  });

  clinicalServicesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  clinicalServicesRouter.get('/:id', function(req, res) {
    res.send({
      'clinical-services': {
        id: req.params.id
      }
    });
  });

  clinicalServicesRouter.put('/:id', function(req, res) {
    res.send({
      'clinical-services': {
        id: req.params.id
      }
    });
  });

  clinicalServicesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/clinical-services', require('body-parser').json());
  app.use('/api/clinical-services', clinicalServicesRouter);
};
