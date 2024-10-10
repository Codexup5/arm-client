import { useEffect, useMemo, useState } from 'react';

import { Mode, Secton } from 'shared/interfaces';

interface useEditSectionsResult<S> {
    mode: Mode;
    sectionsMode: Array<Secton<S>>;
    isEditMode: boolean;
    setMode: React.Dispatch<React.SetStateAction<Mode>>;
    setSectionsMode: React.Dispatch<React.SetStateAction<Array<Secton<S>>>>;
    onChangeMode: () => void;
    onChangeSectionsMode: (name: S, mode: Mode) => void;
    checkSectionMode: (name: S, mode: Mode) => boolean;
}

export const useEditSections = <S extends string>(
    sections: Array<Secton<S>>,
): useEditSectionsResult<S> => {
    const staticSections = useMemo(() => sections, [sections]);
    const [mode, setMode] = useState<Mode>('view');
    const [sectionsMode, setSectionsMode] = useState<Array<Secton<S>>>(sections);

    const isEditMode = mode === 'edit';

    useEffect(() => {
        if (sectionsMode.some((s) => s.mode === 'edit')) {
            setMode('edit');
        } else {
            setMode('view');
        }
    }, [sectionsMode]);

    const onChangeMode = () => {
        setMode(isEditMode ? 'view' : 'edit');
        setSectionsMode(
            isEditMode ? staticSections : staticSections.map((s) => ({ ...s, mode: 'edit' })),
        );
    };

    const onChangeSectionsMode = (name: S, mode: Mode) => {
        setSectionsMode((prev) => prev.map((s) => (s.name === name ? { ...s, mode } : s)));
    };

    const checkSectionMode = (name: S, mode: Mode) =>
        sectionsMode.find((s) => s.name === name)?.mode === mode;

    return {
        mode,
        sectionsMode,
        isEditMode,
        setMode,
        setSectionsMode,
        onChangeMode,
        onChangeSectionsMode,
        checkSectionMode,
    };
};
