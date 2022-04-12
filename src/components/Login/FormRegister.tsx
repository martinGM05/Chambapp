import { StyleSheet, Text, View, Button, Pressable, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup'
import Icon from 'react-native-vector-icons/Ionicons';


const FormRegister = () => {

    const submit = async (values: any) => {
        console.log(values)
    }

    const formikOpt = {
        initialValues: {
            Name: '',
            Email: '',
            Phone: '',
            Password: '',
            PasswordConfirm: ''
        },
        validationSchema: Yup.object().shape({
            Name: Yup.string()
                .min(3, 'Mínimo 3 caracteres')
                .required('Nombre requerido'),
            Email: Yup.string()
                .email('Email inválido')
                .required('Email requerido'),
            Phone: Yup.number()
                .min(10, 'Mínimo 10 dígitos')
                .required('Teléfono requerido'),
            Password: Yup.string()
                .min(6, 'Mínimo 6 caracteres')
                .required('Contraseña requerida'),
            PasswordConfirm: Yup.string()
                .oneOf([Yup.ref('Password'), null], 'Las contraseñas no coinciden')
                .required('Confirmación de contraseña requerida'),
        }),
        onSubmit: submit,
    }

    return (
        <Formik {...formikOpt}>
            {
                formik => (
                    <>
                        <View style={styles.containerForm}>
                            <View style={styles.userContainer}>
                                <TextInput
                                    style={styles.inputStyle}
                                    autoCorrect={false}
                                    placeholder="Nombre"
                                    placeholderTextColor="#999"
                                    onChangeText={formik.handleChange('Name')}
                                    value={formik.values.Name}
                                    onBlur={formik.handleBlur('Name')}
                                />
                                <Icon
                                    name="ios-person"
                                    style={styles.icon} />
                            </View>
                            {
                                formik.touched.Name && formik.errors.Name ?
                                    <View style={styles.contenedorError}>
                                        <Icon name="ios-alert-circle" size={20} color="#ff0000" />
                                        <Text style={styles.error}>{formik.errors.Name}</Text>
                                    </View>
                                    : null
                            }
                            <View style={styles.userContainer}>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Correo electrónico"
                                    placeholderTextColor="#999"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={formik.handleChange('Email')}
                                    value={formik.values.Email}
                                    onBlur={formik.handleBlur('Email')}
                                />
                                <Icon name="ios-mail" style={styles.icon} />
                            </View>
                            {
                                formik.touched.Email && formik.errors.Email ?
                                    <View style={styles.contenedorError}>
                                        <Icon name="ios-alert-circle" size={20} color="#ff0000" />
                                        <Text style={styles.error}>{formik.errors.Email}</Text>
                                    </View>
                                    : null
                            }
                            <View style={styles.userContainer}>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Teléfono"
                                    placeholderTextColor="#999"
                                    keyboardType="phone-pad"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={formik.handleChange('Phone')}
                                    value={formik.values.Phone}
                                    onBlur={formik.handleBlur('Phone')}
                                />
                                <Icon name="ios-call" style={styles.icon} />
                            </View>
                            {
                                formik.touched.Phone && formik.errors.Phone ?
                                    <View style={styles.contenedorError}>
                                        <Icon name="ios-alert-circle" size={20} color="#ff0000" />
                                        <Text style={styles.error}>{formik.errors.Phone}</Text>
                                    </View>
                                    : null
                            }
                            <View style={styles.userContainer}>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Contraseña"
                                    placeholderTextColor="#999"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onChangeText={formik.handleChange('Password')}
                                    value={formik.values.Password}
                                    onBlur={formik.handleBlur('Password')}
                                />
                                <Icon name="eye" style={styles.icon} />
                            </View>
                            {
                                formik.touched.Password && formik.errors.Password ?
                                    <View style={styles.contenedorError}>
                                        <Icon name="ios-alert-circle" size={20} color="#ff0000" />
                                        <Text style={styles.error}>{formik.errors.Password}</Text>
                                    </View>
                                    : null
                            }
                            <View style={styles.userContainer}>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Confirmar contraseña"
                                    placeholderTextColor="#999"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onChangeText={formik.handleChange('PasswordConfirm')}
                                    value={formik.values.PasswordConfirm}
                                    onBlur={formik.handleBlur('PasswordConfirm')}
                                />
                                <Icon name="eye" style={styles.icon} />
                            </View>
                            {
                                formik.touched.PasswordConfirm && formik.errors.PasswordConfirm ?
                                    <View style={styles.contenedorError}>
                                        <Icon name="ios-alert-circle" size={20} color="#ff0000" />
                                        <Text style={styles.error}>{formik.errors.PasswordConfirm}</Text>
                                    </View>
                                    : null
                            }
                            <Pressable
                                onPress={formik.handleSubmit}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Registrarse</Text>
                            </Pressable>
                        </View>
                    </>
                )
            }
        </Formik>
    )
}

export default FormRegister

const styles = StyleSheet.create({
    containerForm: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        height: '80%',
        width: '90%',
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        fontSize: 20,
        flex: 1,
    },
    contenedorError: {
        marginTop: 7,
        padding: 10,
        backgroundColor: '#f9c8c8',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        width: 'auto',
        justifyContent: 'space-around',
    },
    error: {
        color: 'red',
    },
    button: {
        backgroundColor: '#5aa5a9',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#3f3f3f',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',

    },
    userContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 8,
        paddingBottom: 10,
        height: 70,
        borderRadius: 20,
    },
    icon: {
        marginTop: 15,
        fontSize: 30,
        color: '#000',
        marginRight: 10,
    }
})