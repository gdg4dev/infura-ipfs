const IPFS = require('ipfs-api')
// this process should preferably can be done in backend as not to expose credentials in react build
const projectId = process.env.REACT_APP_INFURA_PROJECT_ID
const projectSecret = process.env.REACT_APP_INFURA_SECRET_ID
const auth = 'Basic ' + Buffer.from(projectId+ ':' + projectSecret).toString('base64');
const ipfs = new IPFS({host: 'ipfs.infura.io', protocol: 'https', headers: {
    authorization: auth
}})

export default ipfs