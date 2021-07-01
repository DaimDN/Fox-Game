import HTTPCLIENT from "../DAO/HTTP_CLIENT";

class DATA_GENERATOR {
  public static async $DataGenerator() {
    const A1 = await new HTTPCLIENT().$FETCH_CATDATA();
    const A2 = await new HTTPCLIENT().$FETCH_CATDATA();
    const A3 = await new HTTPCLIENT().$FETCH_CATDATA();
    const A4 = await new HTTPCLIENT().$FETCH_DOGDATA();
    const A5 = await new HTTPCLIENT().$FETCH_DOGDATA();
    const A6 = await new HTTPCLIENT().$FETCH_DOGDATA();
    const A7 = await new HTTPCLIENT().$FETCH_CATDATA();
    const A8 = await new HTTPCLIENT().$FETCH_DOGDATA();
    const A9 = await new HTTPCLIENT().$FETCH_FOXDATA();
    const DATA_BUCKET = [A1, A2, A3, A4, A5, A6, A7, A8, A9];
    
    let flip_dataStorage = DATA_BUCKET.map((bucket) => ({
      sort: Math.random(),
      value: bucket,
    }))
      .sort((inner, val) => inner.sort - val.sort)
      .map((outer) => outer.value);
    return flip_dataStorage;
  }
}

export default DATA_GENERATOR;
