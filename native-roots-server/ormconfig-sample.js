module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "",
    password: "",
    database: "",
    entities: [
        `${process.env.ENTITIES}/**/**.entity{.ts,.js}`
    ],
    synchronize: true
}