(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frente a la herencia!


    type Gender = 'M'|'F'; 

    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor(name: string, gender: Gender, birthdate: Date) {
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    interface PersonProps{
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class Person{
        public birthdate : Date;
        public gender    : Gender;
        public name      : string;

        constructor( { name, gender, birthdate }: PersonProps ) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;

        }
    }

    interface UserProps{
        email  : string;
        role   : string;
    }

    class User {
        private lastAccess: Date;
        public email  : string;
        public role   : string;     

        constructor({email,role}:UserProps) {         
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps{
        workingDirectory : string;
        lastOpenFolder   : string;        
    }

    class Settings{
        public workingDirectory : string;
        public lastOpenFolder   : string;      

        constructor({workingDirectory,lastOpenFolder}:SettingsProps) {              
                this.workingDirectory= workingDirectory;
                this.lastOpenFolder= lastOpenFolder;
             }
    }

    interface UserSettingsProps{
        birthdate        : Date;
        email            : string;
        gender           : string;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }    




    class UserSettings{
       public person: Person;
       public user: User;
       public settings: Settings;

       constructor({name,birthdate,email,gender,lastOpenFolder,role,workingDirectory}:UserSettingsProps) {
        this.person= new Person({name,birthdate,gender} as Person);
        this.settings= new Settings({lastOpenFolder,workingDirectory} as SettingsProps);
        this.user= new User({email,role} as UserProps);

        
       }
    }









    const person = {
        name : 'Ramiro',
        gender: 'M' as Gender,
        birthdate:  new Date('1982-05-20')
    }

    const user: UserProps = {
        email:'rtc@gmail.com',
        role:'admin'
    }

    const usSettings:SettingsProps = {
        lastOpenFolder:'/usr/home',
        workingDirectory: '/usr',        
    }

   
    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });
    console.log({userSettings});

})();