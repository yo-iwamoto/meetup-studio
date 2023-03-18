import { Layout } from '@/components/Layout/Layout';
import Head from 'next/head';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>利用規約 | Meetup Studio</title>
      </Head>
      <section className='px-4 pt-8 pb-20'>
        <div className='prose mx-auto max-w-4xl'>
          <h1>サービス利用規約</h1>
          <p>
            本利用規約&#040;以下、「本規約」といいます。&#041;は、個人が提供するオフラインイベント専用Webアプリケーション&#040;以下、「本サービス」といいます。&#041;の利用条件を定めるものです。本サービスを利用される方&#040;以下、「ユーザー」といいます。&#041;は、本規約に同意したうえで、本サービスを利用してください。
          </p>

          <h2>第1条&#040;適用&#041;</h2>
          <p>
            1. 本規約は、ユーザーと本サービス提供者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            <br />
            2. 本サービス提供者は、ユーザーが本規約に同意することを条件に、本サービスをユーザーに提供します。
          </p>

          <h2>第2条&#040;アカウント登録&#041;</h2>
          <p>
            1. ユーザーは、GoogleまたはGitHubのアカウントによって認証を行い、本サービスの利用登録をすることができます。
            <br />
            2. ユーザーは、自己の責任において、登録アカウントを適切に管理するものとします。
          </p>

          <h2>第3条&#040;利用料金&#041;</h2>
          <p>
            本サービスは、現時点では完全に無料で提供されます。将来的な料金設定や変更がある場合、別途本サービスまたはウェブサイト上で告知するものとします。
          </p>

          <h2>第4条&#040;禁止事項&#041;</h2>
          <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはならないものとします。</p>
          <p>
            1. 法令または公序良俗に違反する行為
            <br />
            2. 他のユーザーや第三者の権利を侵害する行為
            <br />
            3. 他のユーザーや第三者を誹謗中傷する行為
            <br />
            4. 本サービスの運営を妨害する行為
            <br />
            5. その他、本サービス提供者が不適切と判断する行為
          </p>

          <h2>第5条&#040;免責事項&#041;</h2>
          <p>
            本サービス提供者は、本サービスの動作に関して一切の保証を行いません。また、本サービス提供者は、本サービスの利用によって生じた損害について、一切の責任を負わないものとします。
            <br />
            本サービス提供者は、本サービスの内容や機能を予告なく変更または終了することがあります。
          </p>
        </div>
      </section>
    </Layout>
  );
}