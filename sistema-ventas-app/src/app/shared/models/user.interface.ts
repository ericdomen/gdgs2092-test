export interface User {
    username: string;
    password: string;
}

export interface UserResponse {
    message?: string;
    token?: string;
    code?: number;
    cveUsuario?: number;
    nombre?: string;
    apellidos?: string;
    username?: string;
    rol?: string;
    email?: string;
    cveRol?: number;
    password?: string;
}