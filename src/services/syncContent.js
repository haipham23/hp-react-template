import { setTranslations } from 'redux-i18n';

const syncContent = (store) => {
  const translation = {
    en: {
      header: 'React Redux boilerplate',
      check_it_out: 'Check it out at',
      github: 'Github',
      multi_lang_example: 'Multi languages example:',
      check_out_example: 'Checkout other examples:',
      toggle_language: 'Change Language',
      calculation: 'Calculation',
      auth: 'Authentication',
      english: 'English',
      vietnamese: 'Tieng Viet'
    },
    vi: {
      header: 'React Redux boilerplate',
      check_it_out: 'Xem thêm chi tiết tại',
      github: 'Github',
      multi_lang_example: 'Ví dụ về đa ngôn ngữ:',
      check_out_example: 'Xem thêm các ví dụ khác bên dưới:',
      toggle_language: 'Thay đổi ngôn ngữ',
      calculation: 'Tính toán',
      auth: 'Chứng thực',
      english: 'English',
      vietnamese: 'Tiếng Việt'
    }
  };

  return setTranslations(translation);
};

export default syncContent;