-- Revert restfulness:image from pg

BEGIN;

    drop table image;

COMMIT;
