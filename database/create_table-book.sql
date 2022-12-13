CREATE TABLE `books`
(
    `id`          INTEGER                              NOT NULL auto_increment,
    `title`       VARCHAR(255)                         NOT NULL,
    `description` VARCHAR(2048),
    `author`      VARCHAR(255)                         NOT NULL,
    `ratings`     DOUBLE,
    `reviews`     INTEGER,
    `price`       DOUBLE                               NOT NULL DEFAULT 0,
    `front_page`  VARCHAR(1024),
    `created_at`  DATETIME                             NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`  DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE `idx_title_unique` (`title`(255))
)
    engine = innodb
    charset = utf8mb4
    COLLATE utf8mb4_general_ci;