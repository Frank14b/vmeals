import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

export default function Footer() {
    const { t } = useTranslation('common');

    return (
        <div className="bg-light w-100 _footer_custom">
            <div className="container footer">
                <div className='col-md-12 text-center py-3'>
                    <form method='post' className='mt-4'>
                        <h3 className='bold-700'>Subscribe to our newsletter for exclusive promotions!</h3>
                        <div className='col-md-7 col-sm-10 mt-3 mx-auto d-flex'>
                            <input required className="form-control mr-sm-2" type="email" placeholder="Email Address" aria-label="Subscribe" />
                            <button className="btn btn-success mx-2 my-2 my-sm-0" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>

                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top-3">
                    <p className="col-md-4 mb-0 copyright">VMeals - &copy; All Rights Reserved - 2022</p>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#" className="nav-link px-2">Sitemap</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2">{t("_footer.terms_of_conditions")}</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2">{t("_footer.privacy_policy")}</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}