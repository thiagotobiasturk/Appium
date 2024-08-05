export default class TabBar {
    
    static async openLogin(): Promise<void> {
        try {
            // Encuentra el segundo elemento con el texto "Sign In" y haz clic en él
            const signInElement = await $('(//android.widget.TextView[@text="Sign In"])[2]');
            await signInElement.click();
        } catch (error) {
            console.error('Error al intentar abrir la pantalla de inicio de sesión:', error);
            throw error; // Vuelve a lanzar el error para que pueda ser manejado por el llamador
        }
    }
    static async waitForTabBarShown(): Promise<void> {
        try {
            // Encuentra el segundo elemento con el texto "Sign In" y haz clic en él
            const signInElement = await $('(//android.widget.TextView[@text="Sign In"])[1]');
            await signInElement.waitForDisplayed({
                timeout: 20000,
            });
        } catch (error) {
            console.error('Error al intentar abrir la pantalla de inicio de sesión:', error);
            throw error; // Vuelve a lanzar el error para que pueda ser manejado por el llamador
        }
    }
    static async openHome(): Promise<void> {
        try {
            // Encuentra el segundo elemento con el texto "Sign In" y haz clic en él
            const signInElement = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup');
            await signInElement.click()
        } catch (error) {
            console.error('Error al intentar abrir la pantalla de inicio de sesión:', error);
            throw error; // Vuelve a lanzar el error para que pueda ser manejado por el llamador
        }
    }
    

    static async openWebView (): Promise<void> {
        try {
            // Encuentra el segundo elemento con el texto "Sign In" y haz clic en él
            const signInElement = await $('//android.widget.EditText[@text="Password"]');
            await signInElement.click()
        } catch (error) {
            console.error('Error al intentar abrir la pantalla de inicio de sesión:', error);
            throw error; // Vuelve a lanzar el error para que pueda ser manejado por el llamador
        }
    }
    // static async openForms () {
    //     await $('~Forms').click();
    // }

    // static async openSwipe () {
    //     await $('~Swipe').click();
    // }

    // static async openDrag () {
    //     await $('~Drag').click();
    // }
}