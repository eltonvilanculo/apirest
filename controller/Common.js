const SINGLE_USER = id=>`SELECT * FROM person where person_id =  '${id}'`;

const INSERT_USER =function  (person_id,person_name,person_bio,person_email,person_phone_number,person_avatar,person_address)   {
    return `INSERT INTO person (person_id, person_name, person_bio, person_email, person_phone_number, person_avatar, person_address) VALUES ('${person_id}', '${person_name}', '${person_bio}', '${person_email}', '${person_phone_number}', '${person_avatar}', '${person_address}');`;}



module.exports = {

    SINGLE_USER : SINGLE_USER ,
    STORE_USER : INSERT_USER
}