-- Revert restfulness:image_type from pg

BEGIN;

    drop table image_type;

COMMIT;
