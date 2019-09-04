import { useState } from 'react';

import { useADAInput } from '../shared/hooks/input';
import { Checkbox } from '../shared/components/Checkbox';
import { Input } from '../shared/components/Input';
import { Dropdown } from '../shared/components/Dropdown';
import { withGA, withClickTracking } from '../shared/libs/ga';
import { Button } from '../shared/components/Button';

const TrackedButton = withClickTracking(Button, 'click', {
    event_category: 'test',
    event_label: 'bla-bla',
    value: 'hi',
});

const Page = () => {
    const [checked, setChecked] = useADAInput(false, state => !state);
    const [dropdownValue, setDropdownValue] = useState(null);

    const selectValue = value => setDropdownValue(value);

    return (
        <>
            <div className="container">
                <header>
                    <h1 tabIndex="0">Welcome to ARIA demo.</h1>
                </header>
                <article tabIndex="0">
                    <header>
                        <p>
                            Accessible Rich Internet Applications (ARIA) is a
                            set of attributes that define ways to make web
                            content and web applications (especially those
                            developed with JavaScript) more accessible to people
                            with disabilities.
                        </p>
                    </header>
                    <section>
                        <header>
                            <h2 tabIndex="0">
                                Simple case. Using aria attributes to label a
                                component.
                            </h2>
                        </header>

                        <div>
                            <h3>Variant one:</h3>
                            <Input label="This component was labeled by aria-label" />
                        </div>
                        <div>
                            <h3>Variant two:</h3>
                            <Input
                                id="1"
                                label="This component was labeled by aria-labelledby"
                            />
                        </div>
                    </section>
                    <section>
                        <header>
                            <h2 tabIndex="0">
                                Complex case. Using aria attributes to create
                                custom controls.
                            </h2>
                        </header>
                        <div>
                            <h3>Custom checkbox.</h3>
                            <Checkbox
                                checked={checked}
                                label="This checkbox was made using role and aria- attributes"
                                onChange={setChecked}
                            />
                        </div>
                        <div>
                            <h3>Custom select.</h3>
                            <Dropdown
                                values={[11, 22, 33, 44]}
                                selectedValue={dropdownValue}
                                label="custom dropdown"
                                setValue={selectValue}
                            />
                        </div>
                    </section>
                    <a href="https://w3c.github.io/using-aria/">
                        See more on w3c.github.io
                    </a>
                </article>

                <style jsx global>{`
                    * {
                        box-sizing: border-box;
                    }

                    body {
                        background-color: #bc986a;
                        box-sizing: border-box;
                    }

                    .container {
                        width: 1024px;
                        margin: 0 auto;
                    }

                    .dropdown {
                        margin-bottom: 20px;
                    }
                `}</style>
            </div>
        </>
    );
};

export default withGA(Page, 'My index page');
