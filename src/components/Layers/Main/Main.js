import React from 'react';
import '../Main/Main.scss';

const main = () => {


    return (
        <section className="main">
            <div className="main-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title title__h1 c-white fs-62 tac">Продажа сертифицированных привитых саженцев грецкого ореха</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-11 offset-lg-1">
                        <div className="description-border-l mt-70 pl-30 pt-10 pb-10">
                            <div className="description description__md fs-26 c-black-light mb-20">
                                Поставка саженцев грецкого ореха из специализированного орехового питомника более чем с 20-ти летним опытом селекционной работы
                            </div>
                            <div className="description description__md fs-26 c-black-light mb-20">
                                Гарантия приживаемости и соответствия сорта
                            </div>
                            <div className="description description__md fs-26 c-black-light">
                                Услуги по созданию и реализации проекта орехового сада
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default main;