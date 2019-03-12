-- Deploy restfulness:discount to pg

BEGIN;

CREATE TABLE discount (
    id SERIAL PRIMARY KEY,
    label character varying(32),
    value decimal(7,2) not null,
    value_type_id integer, -- percentage / absolute discount value
    published boolean default false,
    starts_at timestamp with time zone NOT NULL,
    expires_at timestamp with time zone NOT NULL,
    created_at timestamp with time zone NOT NULL default current_timestamp,
    updated_at timestamp with time zone NOT NULL default current_timestamp
);

ALTER TABLE ONLY discount ADD CONSTRAINT discount__value_type_id__fkey
FOREIGN KEY (value_type_id) REFERENCES value_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;

COMMIT;
