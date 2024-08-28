import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { Button, CheckBox, Input, TextArea } from "@/shared/ui";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormState = {
  name: string;
  organization: string;
  phone: string;
  email: string;
  text: string;
};

const schemaValidation = yup.object().shape({
  name: yup.string().optional().required('Обязательное поле'),
  organization: yup.string().optional().required('Обязательное поле'),
  phone: yup.string().optional().required('Обязательное поле'),
  email: yup.string().optional().required('Обязательное поле'),
  text: yup.string().optional().required('Обязательное поле'),
});

export const SurveyForm = () => {
  const { handleSubmit, control } = useForm<FormState>({
    resolver: yupResolver(schemaValidation),
    defaultValues: {
      name: "",
      organization: "",
      phone: "",
      email: "",
      text: "",
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormState> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <h2>Анкета для новых клиентов AGIMA</h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              label="Ваше имя"
              value={field.value}
              onChange={(e) => field.onChange(e.currentTarget.value)}
              error={fieldState.error?.message}
              required
            />
          )}
        />
        <Controller
          name="organization"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              label="Компания"
              value={field.value}
              onChange={(e) => field.onChange(e.currentTarget.value)}
              error={fieldState.error?.message}
              required
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              label="Телефон"
              value={field.value}
              onChange={(e) => field.onChange(e.currentTarget.value)}
              error={fieldState.error?.message}
              required
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              label="Электронная почта"
              value={field.value}
              onChange={(e) => field.onChange(e.currentTarget.value)}
              error={fieldState.error?.message}
              required
            />
          )}
        />
        <Controller
          name="text"
          control={control}
          render={({ field, fieldState }) => (
            <TextArea
              placeholder="Напишите текст обращения"
              value={field.value}
              onChange={(e) => field.onChange(e.currentTarget.value)}
              required
            />
          )}
        />
        <div>
          <CheckBox
            label={
              <>
                согласен на обработку моих <a href="#">персональных данных</a>
              </>
            }
          />
          <Button type="submit">Отправить</Button>
        </div>
      </form>
    </div>
  );
};
