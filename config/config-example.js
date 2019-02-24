const VHOST_PROTOCOL     = process.env.VHOST_PROTOCOL;
const VHOST              = process.env.VHOST;
const PUB_PORT           = process.env.PUB_PORT;
const PUB_DOCS_PORT      = process.env.PUB_DOCS_PORT;
const INTERNAL_PORT      = process.env.INTERNAL_PORT;
const INTERNAL_DOCS_PORT = process.env.INTERNAL_DOCS_PORT;
const POSTGRES_HOST      = process.env.POSTGRES_HOST;
const POSTGRES_DB        = process.env.POSTGRES_DB;
const POSTGRES_SSL       = process.env.POSTGRES_SSL;
const POSTGRES_USER      = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD  = process.env.POSTGRES_PASSWORD;

const bodyParser = {
    'application/json': {
        limit: "2mb",
        extended: false
    }
};

const response = {
    headers: [
        ["Access-Control-Allow-Origin", "*"],
        ["Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT"],
        ["Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"],
        //24 hours
        ["Access-Control-Max-Age", "86400"],
        ["X-Content-Type-Options", "nosniff"],
        ["X-Frame-Options", "deny"]
    ]
};

module.exports = {
    apps: {
        public: {
            baseUrl: `${VHOST_PROTOCOL}://${VHOST}:${PUB_PORT}`,
            listen: PUB_PORT,
            stopOnError: false,
            doc: {
                baseUrl: `${VHOST_PROTOCOL}://${VHOST}:${PUB_DOCS_PORT}`,
                listen: PUB_DOCS_PORT,
                name: 'docs',
                title: 'Veromoda',
                stopOnError: true
            },
            bodyParser: bodyParser
        },
        internal: {
            baseUrl: `${VHOST_PROTOCOL}://${VHOST}:${INTERNAL_PORT}`,
            listen: INTERNAL_PORT,
            stopOnError: false,
            doc: {
                baseUrl: `${VHOST_PROTOCOL}://${VHOST}:${INTERNAL_DOCS_PORT}`,
                listen: INTERNAL_DOCS_PORT,
                name: 'docs-internal', //used in the cli
                title: 'Veromoda', //front-end title
                stopOnError: true
            },
            response: response,
            bodyParser: bodyParser
        },
    },
    storage: {
        postgres: {
            host: POSTGRES_HOST,
            ssl: POSTGRES_SSL,
            databases: {
                main: {
                    db: POSTGRES_DB,
                    username: POSTGRES_USER,
                    password: POSTGRES_PASSWORD
                }
            }
        }
    },
    logs: {
        exitOnError: false,  // determines whether a process will exit with status code 1 on 'uncaughtException' event
        transports: [
            {
                type: 'file',
                level: 'info', // maximum log level of this sepecific transport, [optional]
                json: false,
                priority: 0,
                dir: 'logs', // can be absolute or relative to the node's process
                autocreate: true // whether the `dir` should be created if it does not exist
            },
            {
                type: 'console',
                level: 'info',
                priority: 1
            }
        ]
    }
};
