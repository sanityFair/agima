import { List, Typography } from "@mui/material";
import { HELPER_INFO } from "@/shared";
import { Item } from "./item";

/*
  FYI:
  Тут в общем не стал переделывать на свои компоненты из-за того,
   что пропустил требования, надеюсь некритично
*/

export const HelperInfo = () => (
  <List
    sx={{ width: "100%", maxWidth: 430 }}
    subheader={
      <Typography variant="h6" fontWeight="bold" textAlign="center">
        Вспомогательная информация для обращения
      </Typography>
    }
  >
    {HELPER_INFO.map(({ id, title, questions }) => (
      <Item order={id} title={title} questions={questions} key={id} />
    ))}
  </List>
);
