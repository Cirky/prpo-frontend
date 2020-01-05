import { NakupovalniSeznam } from "./nakupovalni-seznam";

export class Uporabnik {
    id: number;
    ime: String;
    priimek: String;
    uporabniskoIme: String;
    email: String;
    nakupovalniSeznami: NakupovalniSeznam[];
}
