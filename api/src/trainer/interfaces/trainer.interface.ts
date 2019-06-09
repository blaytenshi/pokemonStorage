// interfaces represent what data we're sending back to the application
// making the request. It is similar to the data entity but is missing
// critical stuff like id or other things we don't wish to disclose

export interface Trainer {
    firstName: string;
    lastName: string;
}
