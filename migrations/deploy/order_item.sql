-- Deploy restfulness:order_item to pg

BEGIN;

    CREATE TABLE order_item (
        id SERIAL PRIMARY KEY,
        user_id integer NOT NULL,
        product_item_id integer NOT NULL,
        order_id integer NOT NULL,
        order_status_id integer NOT NULL,
        price decimal(7,2) not null, -- product_price * quantity with tax
        tax decimal(7,2) not null, -- tax portion value of price field
        quantity integer not null,
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp,
        deleted_at timestamp with time zone
    );

    ALTER TABLE ONLY order_item ADD CONSTRAINT order_item__user_id__fkey
    FOREIGN KEY (user_id) REFERENCES user(id) ON UPDATE CASCADE ON DELETE RESTRICT;

    ALTER TABLE ONLY order_item ADD CONSTRAINT order_item__product_item_id__fkey
    FOREIGN KEY (product_item_id) REFERENCES product_item(id) ON UPDATE CASCADE ON DELETE RESTRICT;

    ALTER TABLE ONLY order_item ADD CONSTRAINT order_item__order_id__fkey
    FOREIGN KEY (order_id) REFERENCES order(id) ON UPDATE CASCADE ON DELETE CASCADE;

    ALTER TABLE ONLY order_item ADD CONSTRAINT order_item__order_status_id__fkey
    FOREIGN KEY (order_status_id) REFERENCES order_status(id) ON UPDATE CASCADE ON DELETE RESTRICT;


COMMIT;
