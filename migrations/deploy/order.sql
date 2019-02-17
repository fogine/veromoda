-- Deploy restfulness:order to pg

BEGIN;

    CREATE TABLE order (
        id SERIAL PRIMARY KEY,
        user_id integer NOT NULL,
        payment_method_id integer NOT NULL,
        coupon_id integer,
        order_status_id integer NOT NULL,
        -- price decimal(7,2) not null, -- TODO
        ip_address character varying(32),
        street character varying(64), -- TODO can be null, what about no delivery?
        zip integer,-- TODO can be null, what about no delivery?
        city character varying(64),-- TODO can be null, what about no delivery?
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp,
        deleted_at timestamp with time zone
    );

    ALTER TABLE ONLY order ADD CONSTRAINT order__user_id__fkey
    FOREIGN KEY (user_id) REFERENCES user(id) ON UPDATE CASCADE ON DELETE RESTRICT;

    ALTER TABLE ONLY order ADD CONSTRAINT order__payment_method_id__fkey
    FOREIGN KEY (payment_method_id) REFERENCES payment_method(id) ON UPDATE CASCADE ON DELETE RESTRICT;

    ALTER TABLE ONLY order ADD CONSTRAINT order__coupon_id__fkey
    FOREIGN KEY (coupon_id) REFERENCES coupon(id) ON UPDATE CASCADE ON DELETE RESTRICT;

    ALTER TABLE ONLY order ADD CONSTRAINT order__order_status_id__fkey
    FOREIGN KEY (order_status_id) REFERENCES order_status(id) ON UPDATE CASCADE ON DELETE RESTRICT;

COMMIT;
