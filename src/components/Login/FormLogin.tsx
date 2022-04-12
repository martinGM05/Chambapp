import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup'
import Icon from 'react-native-vector-icons/Ionicons';

const FormLogin = () => {

    const submit = async (values: any) => {
        console.log(values)
    }

    const formikOpt = {
        initialValues: {
            Email: '',
            Password: ''
        },
        validationSchema: Yup.object().shape({
            Email: Yup.string()
                .email('Email inválido')
                .required('Email requerido'),
            Password: Yup.string()
                .min(6, 'Mínimo 6 caracteres')
                .required('Contraseña requerida'),
        }),
        onSubmit: submit,
    }


    return (
        <Formik {...formikOpt}>
                {
                    formik => (
                        <>
                            <View style={styles.containerForm}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Correo electrónico"
                                    placeholderTextColor="#999"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={formik.handleChange('Email')}
                                    value={formik.values.Email}
                                    onBlur={formik.handleBlur('Email')}
                                />
                                {
                                    formik.touched.Email && formik.errors.Email ?
                                        <View style={styles.contenedorError}>
                                            <Icon name="ios-alert-circle" size={20} color="#ff0000" />
                                            <Text style={styles.error}>{formik.errors.Email}</Text>
                                        </View>
                                        : null
                                }
                                <TextInput
                                    style={styles.input}
                                    placeholder="Contraseña"
                                    placeholderTextColor="#999"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry
                                    onChangeText={formik.handleChange('Password')}
                                    value={formik.values.Password}
                                    onBlur={formik.handleBlur('Password')}
                                />
                                {
                                    formik.touched.Password && formik.errors.Password ?
                                        <View style={styles.contenedorError}>
                                            <Icon name="ios-alert-circle" size={20} color="#ff0000" />
                                            <Text style={styles.error}>{formik.errors.Email}</Text>
                                        </View>
                                        : null
                                }
                                
                                <Pressable onPress={formik.handleSubmit} style={styles.button}>
                                    <Text style={styles.textButton}>Iniciar sesión</Text>
                                </Pressable>
                            </View>
                        </>
                    )
                }
            </Formik>
    )
}

export default FormLogin

const styles = StyleSheet.create({
    containerForm: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: '#3f3f3f',
        borderWidth: 2,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    contenedorError: {
        marginTop: 7,
        padding: 10,
        backgroundColor: '#f9c8c8',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',
    },
    error: {
        color: 'red',
    },
    button: {
        width: '85%',
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: '#3f3f3f',
        backgroundColor: '#13798e',
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})