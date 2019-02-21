-- Deploy restfulness:user to pg

BEGIN;

    CREATE TABLE "user" (
        id SERIAL PRIMARY KEY,
        first_name character varying(32) NOT NULL,
        last_name character varying(32) NOT NULL,
        instagram_id character varying(64),
        facebook_id character varying(64),
        password character varying(32),
        email character varying(32) NOT NULL,
        subscribed boolean default FALSE,
        street character varying(64),
        zip character varying(16),
        city character varying(64),
        tel  character varying(32),
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp,
        deleted_at timestamp with time zone
    );

    ALTER TABLE ONLY "user" ADD CONSTRAINT user__email__key UNIQUE (email);
    ALTER TABLE ONLY "user" ADD CONSTRAINT user__instagram_id__key UNIQUE (instagram_id);
    ALTER TABLE ONLY "user" ADD CONSTRAINT user__facebook_id__key UNIQUE (facebook_id);
COMMIT;
