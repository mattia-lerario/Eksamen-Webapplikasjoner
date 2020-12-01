import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Email, Password, Button } from 'redux-valid-form';
import PropTypes from 'prop-types';
import LoginWrapper from '../../components/Wrapper/100Height100Width/';
import CenterWrapper from '../../components/Wrapper/MarginAuto/';

class Dashboard {
    render() {
        return (

            <CenterWrapper>
              <Form id="poll-form">
                <Poll-name id="poll-name" required="true" />
                <Poll-options id="poll-option" required="true" />
                <Button value="Create Poll" />
              </Form>
            </CenterWrapper>

        );
      }
    }

    Dashboard.defaultProps = {
    };
    

