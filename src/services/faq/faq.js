import axios from 'axios';

// export function getFaq() {
//   return axios.get(`/faq/`);
// }

export class getFaq {
  constructor(faq, id) {
    this.faq = faq;
  }

  getFaque() {
    return axios.get(this.faq);
  }
}
