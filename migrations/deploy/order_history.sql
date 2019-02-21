-- Deploy restfulness:order_history to pg

BEGIN;

    CREATE TABLE order_history (
        id SERIAL PRIMARY KEY,
        order_id integer NOT NULL,
        order_status_id integer NOT NULL,
        comment character varying(256),
        changed_by character varying(32),
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp
    );

    ALTER TABLE ONLY order_history ADD CONSTRAINT order_history__order_id__fkey
    FOREIGN KEY (order_id) REFERENCES "order"(id) ON UPDATE CASCADE ON DELETE CASCADE;

    ALTER TABLE ONLY order_history ADD CONSTRAINT order_history__order_status_id__fkey
    FOREIGN KEY (order_status_id) REFERENCES order_status(id) ON UPDATE CASCADE ON DELETE RESTRICT;

COMMIT;
