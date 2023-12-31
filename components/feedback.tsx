import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { Button, Container, Row, Col, FormGroup, FormLabel, FloatingLabel, Alert } from 'react-bootstrap';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    opinionType: 'suggestion',
    suggestion: '',
    files: []
};

const validate = (values: any) => {
    const errors: Record<string, string> = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.address) {
        errors.address = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
    } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number';
    }

    if (!values.opinionType) {
        errors.opinionType = 'Required';
    }

    if (!values.suggestion) {
        errors.suggestion = 'Required';
    }

    return errors;
};

const Feedback = () => {
    const [showAlert, setShowAlert] = useState(false);
    const handleSubmit = async (values: any, { setSubmitting, resetForm }: { setSubmitting: Function, resetForm: Function }) => {
        // Handle form submission logic here
        console.log(values);
        try {
            // Convert the files array to FormData for proper file handling
            const formData = new FormData();
            formData.append('firstName', values.firstName);
            formData.append('lastName', values.lastName);
            formData.append('email', values.email);
            formData.append('phoneNumber', values.phoneNumber);
            formData.append('address', values.address);
            formData.append('opinionType', values.opinionType);

            // Append each file to the FormData
            if (values.files && values.files.length > 0) {
                for (let i = 0; i < values.files.length; i++) {
                    formData.append('files', values.files[i]);
                }
            }

            // Make a POST request to your backend endpoint
            const response = await fetch('api/submit-feedback', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Handle successful submission (e.g., show success message)
                console.log('Feedback submitted successfully');
                resetForm();
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 5000);
            } else {
                // Handle error response (e.g., show error message)
                console.error('Error submitting Feedback:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred during form submission:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container className='text-dark'>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                        {(formikProps: any) => (
                            <Form>
                                <Row>
                                    <Col md={{ span: 6 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="firstName" label="First Name">
                                                <Field
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                />
                                                <ErrorMessage name="firstName" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ span: 6 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="lastName" label="Last Name">
                                                <Field type="text" id="lastName" name="lastName" className="form-control" placeholder="Last Name" />
                                                <ErrorMessage name="lastName" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={{ span: 6 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="email" label="Email">
                                                <Field type="email" id="email" name="email" className="form-control" placeholder="Email" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>

                                    <Col md={{ span: 6 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="phoneNumber" label="Phone Number">
                                                <Field type="tel" id="phoneNumber" name="phoneNumber" className="form-control text-secondary" placeholder="Phone Number" />
                                                <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={{ span: 12 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="address" label="Address">
                                                <Field as="textarea" id="address" name="address" className="form-control text-secondary" placeholder="Address" style={{ height: '100px' }} />
                                                <ErrorMessage name="address" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={{ span: 12 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="opinionType" label="Opinion Type">
                                                <Field as="select" id="opinionType" name="opinionType" className="form-control">
                                                    <option value="suggestion" label="Suggestion" />
                                                    <option value="complain" label="Complain" />
                                                    <option value="opinion" label="Opinion" />
                                                </Field>
                                                <ErrorMessage name="opinionType" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={{ span: 12 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="suggestion" label="Add your feedback/comments here">
                                                <Field as="textarea" id="suggestion" name="suggestion" className="form-control text-secondary" placeholder="Add your feedback/comments here" style={{ height: '100px' }} />
                                                <ErrorMessage name="suggestion" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={{ span: 12 }}>
                                        <FormGroup className="mb-3">
                                            <FloatingLabel controlId="files" label="File Upload">
                                                <input
                                                    type="file"
                                                    id="files"
                                                    name="files"
                                                    multiple
                                                    onChange={(event) => {
                                                        const files = event.currentTarget.files;
                                                        formikProps.setFieldValue('files', files);
                                                    }}
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="files" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Button type="submit" variant="primary" className="mt-3" disabled={formikProps.isSubmitting}>
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    {showAlert && (
                        <Alert variant="success" className="position-fixed top-0 start-50 translate-middle-x">
                            Thanks for submitting your valuable feedback. We will get back to you!
                        </Alert>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Feedback;
