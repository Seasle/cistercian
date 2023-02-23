import ky from 'ky';

const assets = ky.create({
  prefixUrl: import.meta.env.PROD ? '/cistercian/' : '/',
});

export default assets;
