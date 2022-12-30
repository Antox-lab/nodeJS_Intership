/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src/server/server');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Tests for Tasks component', () => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJiZjFhODNhNGI2ZDhhZDM3MDE5NiIsImlhdCI6MTY3MTYxMTAwM30.Txlqi7i_CRUmbZuelNHCggk_Moe5Qq-x0lijc9M_Cvg';

    it('get tasks with pages', (done) => {
        chai.request(server)
            .get('/v1/tasks')
            .query({
                page: 2,
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');

                done();
            });
    });

    it('get tasks by user id', (done) => {
        chai.request(server)
            .get('/v1/tasks/all')
            .send({
                id: '63a2bf3e83a4b6d8ad370198',
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');

                done();
            });
    });

    it('for tasks is status code 404', (done) => {
        chai.request(server)
            .get('/v1/task')
            .end((error, res) => {
                res.should.have.status(404);

                done();
            });
    });

    const task = {
        assignee: 'test_63a2bf3e83a4b6d8ad370198',
        title: 'test_title',
        description: 'test_description',
        estimatedTime: 10,
        createdBy: 'test_manager',
    };

    it('Forbidden access', (done) => {
        chai.request(server)
            .post('/v1/tasks')
            .send(task)
            .end((error, res) => {
                res.should.have.status(401);
                res.body.should.be.a('object');

                done();
            });
    });

    it('add new task', (done) => {
        chai.request(server)
            .post('/v1/tasks')
            .set('Authorization', token)
            .send(task)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');

                done();
            });
    });

    it('not data for add task', (done) => {
        chai.request(server)
            .post('/v1/tasks')
            .set('Authorization', token)
            .end((error, res) => {
                res.should.have.status(422);
                res.body.should.be.a('object');

                done();
            });
    });

    it('patch task by task id', (done) => {
        chai.request(server)
            .patch(`/v1/tasks/${task.id}`)
            .set('Authorization', token)
            .send({
                estimatedTime: 999,
            })
            .end((_error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');

                done();
            });
    });

    it('delete tasks by task id', (done) => {
        chai.request(server)
            .delete('/v1/tasks/delete')
            .set('Authorization', token)
            .send({
                id: '63a2bf3e83a4b6d8ad370198',
            })
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');

                done();
            });
    });
});
