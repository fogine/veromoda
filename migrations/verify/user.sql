-- Verify restfulness:users on pg

BEGIN;

    select id,first_name,last_name,password,email,subscribed,street,zip,city,tel,created_at,updated_at from users where false;

ROLLBACK;
