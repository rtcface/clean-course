(() => {

   
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActor( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    function createMovie({title,description,rating, cast}:movie ) {
        console.log({ title, description, rating, cast });
    }

    interface movie {
        cast: string[]
        description: string,
        rating: number,
        title: string,
        }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // Continue...

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
       
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return  2500;
           
        return isRetired ? 3000 : 4000 
    }

})();




