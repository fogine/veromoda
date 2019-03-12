-- Deploy restfulness:coupon to pg

BEGIN;

CREATE TABLE coupon (
    id SERIAL PRIMARY KEY,
    label character varying(32),
    code character varying(32) NOT NULL,
    value decimal(7,2) not null,
    value_type_id integer, -- percentage / absolute discount value
    number_of_uses integer, -- remaining number of uses, null value if it can be used until it expires
    published boolean NOT NULL default true,
    starts_at timestamp with time zone NOT NULL default current_timestamp,
    expires_at timestamp with time zone NOT NULL,
    created_at timestamp with time zone NOT NULL default current_timestamp,
    updated_at timestamp with time zone NOT NULL default current_timestamp
);

ALTER TABLE ONLY coupon ADD CONSTRAINT coupon__code__key UNIQUE (code);
ALTER TABLE ONLY coupon ADD CONSTRAINT coupon__value_type_id__fkey
FOREIGN KEY (value_type_id) REFERENCES value_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;

COMMIT;
