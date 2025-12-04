import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import Swal from 'sweetalert2';

export default function HomePage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const auth = getAuth(app);

    const signUp = async () => {
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            Swal.fire({
                title: "Empty fields",
                text: "Please, fill up all the fields.",
                icon: "warning",
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                title: "Different passwords",
                text: "The passwords don't match.",
                icon: "error",
            });
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            await Swal.fire({
                title: "Account created!",
                text: `Welcome, ${name}.`,
                icon: "success",
                confirmButtonText: "OK",
            });

            router.push('/');
        } catch (error) {
            let message = "An error occured while creating account.";

            if (typeof error === "object" && error !== null && "code" in error) {
                const code = (error as any).code;

                switch (code) {
                    case "auth/email-already-in-use":
                        message = "This email is already in use.";
                        break;
                    case "auth/invalid-email":
                        message = "This email is invalid.";
                        break;
                    case "auth/weak-password":
                        message = "The password must have 6 characters.";
                        break;
                }
            }

            Swal.fire({
                title: "Erro",
                text: message,
                icon: "error",
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.title}>Create your account</Text>

                <TextInput placeholder="Name" style={styles.input} onChangeText={(value) => setName(value)} />
                <View style={styles.underInput}></View>

                <TextInput placeholder="E-mail" style={styles.input} onChangeText={(value) => setEmail(value)} />
                <View style={styles.underInput}></View>

                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
                <View style={styles.underInput}></View>

                <TextInput placeholder="Confirm password" style={styles.input} secureTextEntry={true} onChangeText={(value) => setConfirmPassword(value)} />
                <View style={styles.underInput}></View>

                <TouchableOpacity onPress={signUp}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text style={styles.footerLink}>Login here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#415A77',
    },
    title: {
        color: '#E0E1DD',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        textAlign: 'center',
        marginBottom: 16,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: 20,
        color: '#E0E1DD',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#778DA9',
        marginTop: 30,
    },
    input: {
        alignSelf: 'center',
        margin: 20,
        width: 200,
        height: 30,
        textAlign: 'left',
        fontFamily: 'monospace',
        color: '#E0E1DD',
        marginLeft: 20,
        outlineColor: 'transparent',
    },
    underInput: {
        width: 220,
        height: 1,
        backgroundColor: '#1B263B',
        marginTop: -20,
        marginBottom: -5,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        backgroundColor: '#415A77',
    },
    footerText: {
        fontFamily: 'monospace',
        fontSize: 14,
        color: '#E0E1DD',
        marginRight: 5,
    },
    footerLink: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#E0E1DD',
        textDecorationLine: 'underline',
    }
});