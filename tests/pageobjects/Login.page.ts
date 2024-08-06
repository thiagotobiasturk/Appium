class Login {
    get usernameInput() { return $('//android.widget.EditText[@text="Email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@text="Password"]'); }
    get submitButton() { return $('(//android.widget.TextView[@text="Sign In"])[2]'); }
    get successMessage() { return $('//android.widget.ScrollView/android.view.ViewGroup'); } // Ajusta según el selector real
    get errorMessage() { return $('#error'); } // Ajusta según el selector real
    get open() { return $('//android.view.View');}
    
    async openview() {
        await this.open;// Ajusta la URL según sea necesario
    }

    async setUsername(username: string) { // Aquí se especifica que 'username' es un string
        await this.usernameInput.setValue(username);
    }

    
    async submitLoginForm() {
        await this.submitButton.click();
    }
    
    async setPassword(password: string) { // Aquí se especifica que 'password' es un string
        await this.passwordInput.setValue(password);
    }
    
    async loginsuccesfull() {
        await this.successMessage;
    }
}

export default new Login();
