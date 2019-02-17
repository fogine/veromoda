-- Deploy restfulness:coupon to pg

BEGIN;

CREATE TABLE coupon (
    id SERIAL PRIMARY KEY,
    label character varying(32),
    code character varying(32) NOT NULL,
    discount_id integer NOT NULL,
    published boolean NOT NULL default false,
    created_at timestamp with time zone NOT NULL default current_timestamp,
    updated_at timestamp with time zone NOT NULL default current_timestamp
);

ALTER TABLE ONLY coupon ADD CONSTRAINT coupon__code__key UNIQUE (code);

ALTER TABLE ONLY counpon ADD CONSTRAINT coupon__discount_id__fkey
FOREIGN KEY (discount_id) REFERENCES discount(id) ON UPDATE CASCADE ON DELETE RESTRICT;

COMMIT;
